import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ISB_PARTITION', {schema: 'dbo' } )
export class T_ISB_PARTITION {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IPA_ITEMIDNUMBER_C',
        })
    public IPA_ITEMIDNUMBER_C: string;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'IPA_QUANTITYORDERED_N',
        })
    public IPA_QUANTITYORDERED_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'IPA_PARTITION1_N',
        })
    public IPA_PARTITION1_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'IPA_PARTITION2_N',
        })
    public IPA_PARTITION2_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'IPA_PARTITION3_N',
        })
    public IPA_PARTITION3_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'IPA_PARTITION4_N',
        })
    public IPA_PARTITION4_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'IPA_PARTITION5_N',
        })
    public IPA_PARTITION5_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'IPA_PARTITION6_N',
        })
    public IPA_PARTITION6_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'IPA_PARTITION7_N',
        })
    public IPA_PARTITION7_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'IPA_PARTITION8_N',
        })
    public IPA_PARTITION8_N: number | null;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IPA_ID_N',
        })
    public IPA_ID_N: number;

}
