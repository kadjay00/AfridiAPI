import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TRC_TRACABILITY', {schema: 'dbo' } )
export class T_TRC_TRACABILITY {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'TRC_TDATE_DAT',
        })
    public TRC_TDATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 28,
        name: 'TRC_CODE_C',
        })
    public TRC_CODE_C: string;

    @Column('char', {
        nullable: false,
        name: 'TRC_DELCODE_C',
        })
    public TRC_DELCODE_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'TRC_DELDATE_DAT',
        })
    public TRC_DELDATE_DAT: Date | null;

    @Column('int', {
        nullable: false,
        name: 'TRC_MEATTYPEID_N',
        })
    public TRC_MEATTYPEID_N: number;

}
