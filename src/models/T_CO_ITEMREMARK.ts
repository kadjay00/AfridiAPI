import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CO_ITEMREMARK', {schema: 'dbo' } )
@Index('IX_CO_ITEMREMARK', ['IRM_EXCEPTIONDATE_DAT', 'IRM_MANAGER_N', 'IRM_IDNUMBER_C', 'IRM_REMARKID_N'])
export class T_CO_ITEMREMARK {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'IRM_ID_N',
        })
    public IRM_ID_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'IRM_EXCEPTIONDATE_DAT',
        })
    public IRM_EXCEPTIONDATE_DAT: Date;

    @Column('int', {
        nullable: false,
        name: 'IRM_MANAGER_N',
        })
    public IRM_MANAGER_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'IRM_IDNUMBER_C',
        })
    public IRM_IDNUMBER_C: string;

    @Column('smallint', {
        nullable: false,
        name: 'IRM_REMARKID_N',
        })
    public IRM_REMARKID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'IRM_DATE_DAT',
        })
    public IRM_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'IRM_USERID_C',
        })
    public IRM_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'IRM_PDT_C',
        })
    public IRM_PDT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IRM_ORIGIN_C',
        })
    public IRM_ORIGIN_C: string | null;

}
