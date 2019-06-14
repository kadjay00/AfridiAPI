import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ECOM_EANCODE', {schema: 'dbo' } )
export class T_ECOM_EANCODE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'EEC_IDNUMBER_C',
        })
    public EEC_IDNUMBER_C: string;

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'EEC_EANCODE_N',
        })
    public EEC_EANCODE_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'EEC_CREATIONDATE_DAT',
        })
    public EEC_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'EEC_UPDATEDATE_DAT',
        })
    public EEC_UPDATEDATE_DAT: Date | null;

}
