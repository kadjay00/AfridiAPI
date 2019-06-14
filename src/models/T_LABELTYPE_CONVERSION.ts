import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LABELTYPE_CONVERSION', {schema: 'dbo' } )
export class T_LABELTYPE_CONVERSION {

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'LTC_CONVERSIONTYPE_N',
        })
    public LTC_CONVERSIONTYPE_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'LTC_CONVERSIONVALUE_C',
        })
    public LTC_CONVERSIONVALUE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'LTC_LABELTYPE_C',
        })
    public LTC_LABELTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LTC_LABELPRINT_C',
        })
    public LTC_LABELPRINT_C: string | null;

}
